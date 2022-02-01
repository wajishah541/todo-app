package todoDb

import (
	"database/sql"
	"fmt"
	"github.com/TODO_APP/service/models"
	"github.com/labstack/echo/v4"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "Ciklum123$"
	dbname   = "todoDb"
)

type TodoDb interface {
	createTodo(c echo.context)
	GetAllTodos(c echo.context)
}
type TodoDbImpl struct {
	conn *sql.DB
}

func NewTodoDbImpl() *TodoDbImpl {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("connected!")
	return &TodoDbImpl{
		db: db,
	}
}

var _TodoAppDb = &TodoDbImpl{}
