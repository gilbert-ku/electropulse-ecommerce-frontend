import electrologo from "/electrolog.png"


const LogIn = () => {
    return (
    <>
        <h1>SignIn page</h1>

        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
                    <img className="w-40 h-25 mr-2" src={electrologo} alt="logo" />
   
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border  border-amber-500 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-amber-500 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-900 block w-full p-2.5  dark:border-primary-600 dark:placeholder-gray-400  " placeholder="name@email.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className=" border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-amber-500 block w-full p-2.5  dark:border-amber-500 dark:placeholder-gray-400    " required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-full bg-white rounded-lg border border-amber-500 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label  className="text-amber-500 dark:text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button className="bg-transparent w-full hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
                                Sign In
                            </button>                            <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-amber-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    </>
        


    )
}

export default LogIn