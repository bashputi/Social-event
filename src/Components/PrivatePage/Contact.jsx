

const Contact = () => {
    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="card px-10 py-10 lg:card-side bg-green-100 shadow-2xl">
                <figure>
                    <img className="w-[45vw]" src="https://i.ibb.co/7YvDyX6/Neha-Alman-Wedding-725-scaled.jpg" alt="Album"/>
                </figure>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <h1 className="text-2xl lg:text-5xl text-center ">Contact Us</h1>
                            <form className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                                
                                <label className="label">
                                    <span className="label-text">Contact Us</span>
                                </label>
                                <input type="text" placeholder="Contact Us" className="input input-bordered" required />
                               
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn btn-warning">Submit</button>
                                </div>
                            </form>
                            
                </div>
                </div>
        </div>
    );
};

export default Contact;