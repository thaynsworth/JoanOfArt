class ProjectsController < ApplicationController
  include SessionsHelper

  def index
    @flowers = Project.where(category: "flowers")
    @animals = Project.where(category: "animals")
    @landscapes = Project.where(category: "landscapes")
    @greeting = Project.where(category: "greeting cards")
    @books = Project.where(category: "childrens books")
  end

  def show

    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def edit

  end

  def create

    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to projects_path, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to projects_path, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy

    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :price, :category, :user_id, :avatar, :project_id)
  end

end