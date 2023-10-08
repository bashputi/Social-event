

const Extra = () => {
    return (
        <div className="bg-green-100 py-10 my-8 shadow-xl ">
            <div className="">
            <h1 className="text-5xl text-amber-500 font-bold text-center my-10">Our Wedding Preparations</h1>
            <p className="font-semibold text-center"> Marriage is a bond, and it is greater than every other relationship known to man. Weddings must
                 be one of the most cheerful occasions <br /> ever because
                  people really come out looking their best. so they become very nervous.</p>

                  <div className="flex justify-center my-8 ">
                  <div className="grid lg:grid-cols-3 gap-5">
                  <img className="w-[80vw] lg:w-[20vw] h-[40vh]" src="https://i.ibb.co/m8c4SXD/960136-42929-l-67123b-Ug-AGar.jpg" alt="photo" />
                    <img className="w-[80vw] lg:w-[20vw] h-[40vh]" src="https://i.ibb.co/d0ty8v4/fd62c203-8455-4879-8bf6-2a3d97bf0e85-1-01-3.jpg" alt="photo" />
                    <img className="w-[80vw] lg:w-[20vw] h-[40vh]" src="https://i.ibb.co/S78Zcp5/78e7af503cd6a7779ab0694bd81c1101.jpg" alt="photo" />
                  </div>
                    
                    
                  </div>

                  <div className="flex flex-wrap justify-center gap-5 lg:gap-20">
                    <div>
                        <p className="text-3xl font-extrabold ml-2.5 text-green-600">220</p>
                        <hr className=" w-[50px] ml-3" />
                        <p className="text-xl font-semibold text-red-500">GUESTS</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold ml-3 text-green-600">730</p>
                        <hr className=" w-[50px] ml-4"/>
                        <p className="text-xl font-semibold text-red-500">PHOTOS</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold ml-5 text-green-600">120</p>
                        <hr className=" w-[50px] ml-5" />
                        <p className="text-xl font-semibold text-red-500">FLOWERS</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold ml-12 text-green-600">755</p>
                        <hr className=" w-[50px] ml-[50px]" />
                        <p className="text-xl font-semibold text-red-500">DAYS TOGETHER</p>
                    </div>


                  </div>
            </div>
        </div>
    );
};

export default Extra;