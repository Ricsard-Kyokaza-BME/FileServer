# FileServer
Tiny FileServer based on NodeJS with multer, Dockerized

## Routes

| Action        | Method           | Path  | Accept | Response |
| ------------- |:-------------:| -----:| ----------: | -----: |
|Get file:     | ```GET``` | ```/:fileName``` | String | File |
|Upload file:  | ```POST``` | ```/``` | multipart/form-data in ```files``` field. Can contain one or multiple files. | Array of file names
