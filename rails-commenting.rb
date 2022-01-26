# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController is a inherits from Application Controller
class BlogPostsController < ApplicationController
  def index
    # ---2) Index is a controller verb for show all blog posts the router (http verbs) makes a request to the controller (controller verbs) to show all indexed blog posts. 
    @posts = BlogPost.all
  end

  def show
    # ---3) Show is a controller verb and an HTTP get command. The code below is used to show a single entry from the database. The code below sets the instance variable equal to a single BlogPost
    @post = BlogPost.find(params[:id])
  end

  # ---4) New is the controller verb that uses the HTTP verb Post. The new method accesses a new form for a user to input data into
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) the instance variable BlogPost creates a new instance of BlogPost. This instance takes in the private parameters for :title and :content. These two parameters indicate that the methods that are inputting new information into the database can only insert certain datatypes. Those are the datatypes associated with :title and :content.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit is the controller verb for accessing a new form. Edit is the equivalent to the HTTP verbn patch, and is the precursor before the controller verb update. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post.update(blog_post_params) is used to update the blog post entry with the new information from blog_post_params. The code below then checks to see if @post has been instantiated. If true --> go to blog_post_path(@post), else go back to edit_blog_post_path
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This code snipper checks to see if the user has instanciated the destroy controller verb. If a new instance of destroy has not been created and the user arrives there by accident (dunno how that would happen) the user is then redirected to blog_post_path(@post)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a method that only allows for it to be called or accessed from the class it is defined. This means, intruders cannot access and input information into the database. Only the controller has access to updating the database. 
  private
  def blog_post_params
    # ---10) The below requires that the table :blog_post only takes in the datatypes associated with :title and :content
    params.require(:blog_post).permit(:title, :content)
  end
end
