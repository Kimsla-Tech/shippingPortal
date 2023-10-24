import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import '../SignUp/signup.css'
import { FacebookLogo, InstagramLogo, TwitterLogo } from "../../../utils/Icons";
import { FiPhoneCall } from "react-icons/fi";

const SignIn = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div className="">
			<div className="bg-authBg cover py-9 lg:h-[100vh] h-full">
				<div className="w-[90%] mx-auto flex">
					<div className="w-full ">
						<p className="font-semibold text-3xl text-white w-[30%]">Welcome to JAND</p>
						<div className="flex flex-col items-center justify-center lg:pt-[10%] space-y-5 text-white">
							<p className="uppercase font-bold text-[40px] text-secondary"> Jand</p>
							<p className="text-4xl font-semibold">Join the shopping Revolution!</p>
							<p className="text-3xl text-center font-normal">Sign Up today for Exclusive Deals and instant Accessnto a World of Possibilities......
							</p>


							<p>Fellows Us
								on</p>
							<div className="flex gap-3 items-center">
								<TwitterLogo />
								<InstagramLogo />
								<FacebookLogo />
							</div>

							<div className="flex gap-8 items-center">
								<div className="flex gap-2 items-center">
									<AiOutlineMail />
									<p>JANDbuyme@mail.com</p>
								</div>
								<div className="flex gap-2 items-center">
									<FiPhoneCall />
									<p>+2348067115949, +2348166217129</p>
								</div>

							</div>

						</div>
					</div>

					<div className="bg-white opacity-90 lg:w-5/6 rounded-3xl pt-10 px-20" >
						<div>
							<div className="flex gap-5 font-semibold text-base pb-5">

								<p>
									<NavLink to="/signup" className="nav-link" activeClassName="underline">Sign Up</NavLink>
								</p>
								<p>
									<NavLink to="/signin" className="nav-link" activeClassName="underline">Sign In</NavLink>
								</p>
							</div>

							<div className="flex justify-between font-semibold text-base pb-5">
								<p>Personal Account</p>
								<p>Business Account</p>
							</div>

							<form className="space-y-8" >
								<div>
									<label htmlFor="email" className="block font-semibold text-base">Email Address</label>
									<input type="text" placeholder="Email" className="w-full outline-0 border p-2 border-[#228BE6] rounded-lg " />
								</div>


								<div>
									<label htmlFor="password" className="block font-semibold text-base">Password</label>
									<div className="relative">
										<input
											type={passwordVisible ? "text" : "password"}
											placeholder="Password"
											className="w-full outline-0 border p-2 border-[#228BE6] rounded-lg"
										/>
										{passwordVisible ? (
											<AiOutlineEye
												onClick={togglePasswordVisibility}
												style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
											/>
										) : (
											<AiOutlineEyeInvisible
												onClick={togglePasswordVisibility}
												style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
											/>
										)}
									</div>
								</div>


								<div className="py-2">
									<button type="submit" className="bg-secondary hover:bg-blue-900 transition-all p-2 text-base font-semibold text-white w-full rounded-lg">Create an account</button>
								</div>
								<p className="text-center text-base font-semibold pb-2">
									<Link to='/forgetpassword'>
										Forget Password?
									</Link>
								</p>

							</form>
							<div className="flex justify-center items-center">
								<p>Secure</p>
								<AiOutlineLock />
							</div>
						</div>
					</div>
				</div>
			</div>

		</div >
	)
}

export default SignIn