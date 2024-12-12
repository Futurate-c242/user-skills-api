# User Skills API

This API currently is:
- Under active development.
- Intended for internal use only.

## Base URL

[https://user-skills-api-352594405825.asia-southeast2.run.app](https://user-skills-api-352594405825.asia-southeast2.run.app)

## Endpoints

Send your request body in JSON.

### POST `/api/user-skills/add`

The endpoint to input user skills.

```json
// request body in JSON
{
  "user_id": "ffdpcnirW1Z33oPiO20Ra5ma2ck1",
  "user_skills": ["JavaScript", "Node.js", "React", "rusdi"]
}
```

### POST `/api/user-skills/add` response
Response from a request to create a user skill that shows whether the skill was added successfully

```json
// request body in JSON
{
{
    "message": "Skills added successfully"
}
}
```
Thats mean user skills is succesfully added to database user
