class Api::TodosController < ApplicationController


  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end


  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      redirect_to api_todo_url(@todo)
    else
      render json: @todo.errors.full_messages, status: 422
      # render json :new
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    redirect_to api_todos_url
  end


  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      redirect_to api_todo_url(@todo)
    else
      render json: @todo.errors.full_messages, status: 422
      # render json :edit
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
