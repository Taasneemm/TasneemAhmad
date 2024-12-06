// root.js

function PublicBlogPost() {

}

function PrivateBlogPost() {

}

function BlogPost(props) {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{"By " + props.author + " on " + props.date}</p>
      <p>{props.content}</p>
    </div>

  )
    

  
}

function BlogList() {

}

function Header(props) {
  return <header>
    <h1>{props.title}</h1>
    <p>{props.tagline}</p>
  </header>
  
}

function Footer() {

};

function App() {
  return <>

    <div className = "App">

    <Header 
      title = "My Blog"
      tagline = "A blog about everything"
    />

    <BlogPost 
      title = "My First Blog Post"
      author = "John Doe" 
      date = "June 1, 2023"
      content = "Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me."
    />

    </div>
    
  </>
    
    
  
    
  
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      private: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      private: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      private: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      private: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      private: false
    }
  ];

};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)