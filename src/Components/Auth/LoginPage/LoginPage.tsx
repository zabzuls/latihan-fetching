// "use client";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(hanleSubmit);
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={hanleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </div>
        </form>
        <div className="flex justify-between">
        <Link className="hover:underline" href="/Register">Register</Link>
        <Link href="/Forgot">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}
