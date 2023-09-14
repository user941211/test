

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        
        <form className="mt-6 mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">아이디</label>
            <input type="user_id" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            <label htmlFor="pw" className="block text-sm font-semibold text-gray-800">비밀번호</label>
            <input type="user_pw" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">로그인하기!</button>
            </div>
            </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700 mx-2">실험용 id 비번은 abcd, 1234로 적으시면 됩니다~</p>
      </div>
    </div>
  )
}
	// @@ -29,13 +33,13 @@ export default async function Home() {
