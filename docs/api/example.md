# Group ユーザ

# 詳細 [GET /api/users/{id}]

+ Parameters

    + id (number) ... identifier

+ Request GET /api/users/1

+ Response 200 (application/json)

    + Body

                {
                  name: 'Aさん'
                }

+ Request GET /api/users/2

+ Response 200 (application/json)

    + Body

                {
                  name: 'Bさん'
                }

+ Request GET /api/users/:id

+ Response 200 (application/json)

    + Body

                {
                  name: '某'
                }

# 一覧 [GET /api/users?{page}]

+ Parameters

    + page (number) ... page number

+ Request GET /api/users?page=1

+ Response 200 (application/json)

    + Body

              {
                page: 1,
              }

+ Request GET /api/users?page=2

+ Response 200 (application/json)

    + Body

              {
                page: 2,
              }
