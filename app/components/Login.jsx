export default function Login() {
  return (
      <div className="w-96 border-white shadow-2xl rounded-lg py-10 px-10 flex flex-col space-y-6">
        <div className="flex flex-col mb-6">
        <span className="text-3xl text-purple font-bold text-center">testingninja</span>
        <span className="text-lg text mt-3 text-center text-purple">Login to Your Account</span>
        </div>
        <input
          type="text"
          className="rounded-lg bg-gray text-purple font-medium"
          placeholder="Email address"
        />
        <input
          type="text"
          className="rounded-lg bg-gray text-purple font-medium"
          placeholder="Password"
        />
        <span className="text-purple text-center">Forgot your password?</span>
        <div className="h-12"/>
        <div className="flex flex-row justify-between items-center">
          <a href="#"><span className="text-lg font-semibold text-purple">Create Account</span></a>
        <button className="bg-purple rounded-lg text-white text-lg font-semibold py-2 px-5">Login</button>
        </div>
      </div>
  );
}
