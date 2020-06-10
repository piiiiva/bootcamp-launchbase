const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`
            SELECT teachers.*, count(students) AS total_students
            FROM teachers
            LEFT JOIN students ON (students.teacher_id = teachers.id)
            GROUP BY teachers.id
            ORDER BY total_students DESC
        `,
        function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        }
        )
    },
    create(data, callback) {
        const query = `
            INSERT INTO teachers (
                avatar_url,
                name,
                birth_date,
                education_level,
                class_type,
                subject_taught,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
            `
        
        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.education_level,
            data.class_type,
            data.subject_taught,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback){
        db.query(`
            SELECT *
            FROM teachers
            WHERE id = $1
        `, [id], function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        }
        )
    },
    findBy(filter, callback){
        db.query(`
        SELECT teachers.*, count(students) AS total_students
        FROM teachers
        LEFT JOIN students ON (students.teacher_id = teachers.id)
        WHERE teachers.name iLIKE '%${filter}%'
        OR teachers.subject_taught iLIKE '%${filter}%'
        GROUP BY teachers.id
        ORDER BY total_students DESC`
        , function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        } )
    },
    update(data, callback) {
        const query = `
            UPDATE teachers SET
                avatar_url=($1),
                name=($2),
                birth_date=($3),
                education_level=($4),
                class_type=($5),
                subject_taught=($6)
            WHERE id = $7
            `
        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.education_level,
            data.class_type,
            data.subject_taught,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id, callback) {
        db.query(`
            DELETE FROM teachers
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback()
            }
            )
    },

    paginate(params) {
        const { filter, limit, offset, callback } = params

        let query = ``,
            filterQuery = ``,
            totalQuery = `(
                SELECT count(*) FROM teachers
            ) AS total`

        if (filter) {
            filterQuery = `
                WHERE teachers.name iLIKE '%${filter}%'
                OR teachers.subject_taught iLIKE '%${filter}%'
            `

            totalQuery = `(
                SELECT count(*) FROM teachers
                ${filterQuery}
            ) AS total`
        }

        query = `
            SELECT teachers.*, ${totalQuery}, count(students) AS total_students
            FROM teachers
            LEFT JOIN students ON (students.teacher_id = teachers.id)
            ${filterQuery}
            GROUP BY teachers.id 
            ORDER BY total_students DESC
            LIMIT $1 OFFSET $2
        `
        db.query(query, [limit, offset], function(err, results) {
            if (err) throw `Database Error ${err}`

            callback(results.rows)
        })

    }


}