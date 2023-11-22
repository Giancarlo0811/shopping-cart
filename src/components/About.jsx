function About() {
    return (
        <div 
            className="d-flex flex-column justify-content-center align-items-center mt-5" 
            style={{height:'70vh'}}
        >
            <h1 className="text-white mb-4 text-center">Tienda de productos Electrónicos</h1>
            <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Repellendus accusamus quaerat cum molestiae 
            eum ab perferendis alias a. Recusandae quos tenetur excepturi 
            libero perferendis harum praesentium quas, laboriosam a dolorem.</p>
            <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Repellendus accusamus quaerat cum molestiae 
            eum ab perferendis alias a. Recusandae quos tenetur excepturi 
            libero perferendis harum praesentium quas, laboriosam a dolorem.</p>
           <div className="d-flex" style={{gap:'1rem'}}>
                <a href="#"><i className="fa-brands fa-twitter h2"></i></a>
                <a href="#"><i className="fa-brands fa-instagram h2"></i></a>
                <a href="#"><i className="fa-brands fa-facebook h2"></i></a>
           </div>
        </div>
    );
}

export default About;