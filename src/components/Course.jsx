import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";


function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
<div className="max-w-screen-2xl container mx-auto md:px-20 px-4" style={{ marginTop: "4vh" }}>
<div className="block mt-36">
    <h1 className="text-2xl md:text-4xl">
      We're delighted to have you{" "}
      <span className="text-pink-500"> Here! :)</span>
    </h1>
    <p className="mt-12">
      "Byte-sized knowledge, giant leaps: Free books to accelerate your learning!"
    </p>
    </div>
  <div className="items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2vw', justifyItems: 'center', width: '100%' }}>



    {/* Videos */}
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/vLqTf2b6GZw?si=vJLaSuedW_d37d20"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/irqbmMNs2Bo?si=Ay01g7ava-g1Q8A5"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/e7sAf4SbS_g?si=k2Bz8DlN7bigeu8Q"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/YRnjGeQbsHQ?si=o4X_iW9scJ7Fb_LJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_tCY-c-sPZc?si=DaTzapwEg0h1z5Dg"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/1V9mhVgVH3A?si=lwvwZI8zYT7nJvuE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/y39OlGrVFD8?si=4ld4bsYVn4tJA2GJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/NlLM3sVF8wY?si=oJ3IPU9Aa1QYL2-e"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Byf6xOYdNcw?si=zRSZuEzSRZgViWgA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "100%", border: "none", borderRadius: "8px" }}
    ></iframe>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
    <a
      href="https://drive.google.com/file/d/1mHUFj0QPLKhi43XpkpOf-BD-6eesoaMi/view?usp=sharing"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Pyhton_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1NmCmddBZS4sIw3f70XHuDGL3i80g4fzZ/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     C_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1-AOKpXakCUGZUABnaXAnSK4JEhznDrcu/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     C++_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1FnkYwSXLftiLGac1OvRk5sAGevtZuGam/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Java_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1KnNo2k-qJuddcxcahgLsSgsmmkDIN9om/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Linux_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1ubG5j9FeGUbocbZLBTwSH_sArqFUIGP6/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Computer Network_notes download
    </a>
      <a
      href="https://drive.google.com/file/d/1VW3bnQi9GuGhPjTd367a_N3FQfqZuHkT/view?usp=drive_link"
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Html_notes download
    </a>
      <a
      href=""
      style={{
        color: '#007bff', // Professional blue color
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')
      }
    >
     Css_notes download
    </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <Link to="/">
        <button 
          style={{ 
            marginTop: '1.4rem', 
            backgroundColor: '#ec4899', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.375rem', 
            transition: 'background-color 0.3s' 
          }} 
          onMouseOver={(e) => e.target.style.backgroundColor = '#db2777'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ec4899'}
        >
          Back
        </button>
      </Link>
</div>


  

    </>
    
  );
  
}



export default Course;
