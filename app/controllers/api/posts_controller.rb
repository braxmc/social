class Api::PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    post = Post.new(description: params[:description])

   file = params[:file]
    if file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        post.image = cloud_image['secure_url']
      end
    end

    if post.save
      render json: post
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    post.description = params[:description] ? params[:description] : plant.description

    file = params[:file]
    if file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        post.image = cloud_image['secure_url']
      end
    end

    if post.save
      render json: post
    else
      render json: { errors: rpost.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    reder json: { message: 'Post Deleted' }
  end

  private

  def post_params
    params.require(:post).permit(:image, :description)
  end

end
