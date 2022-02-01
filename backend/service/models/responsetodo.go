package models

type Response struct {
	Id      int         `json:"ID"`
	Content interface{} `json:"Content"`
}
