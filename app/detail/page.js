import React from "react";

function Component0() {
    //서명진행
    return <p className="text-xl font-semibold">서명 진행</p>
}

function Component1() {
    //서명 진행중
    return <p className="text-xl font-semibold">서명 진행중</p>
}

function Component2() {
    return <p className="text-xl font-semibold">1차 서명 완료</p>
}

function Component3() {
    return <p className="text-xl font-semibold">2차 서명 완료</p>
}

function Component4() {
    return <p className="text-xl font-semibold">반려 처리</p>
}
export default async function Detail() {
    let phase;
    let a = 0;
    //res들어갈것
    switch (a) {
        case 0:
            phase = <Component0 />;
            break;
        case 1:
            phase = <Component1 />;
            break;
        case 2:
            phase = <Component2 />;
            break;
        case 3:
            phase = <Component3 />;
            break;
        case 4:
            phase = <Component4 />;
            break;
        default:
            phase = <div>에러..</div>;
    }
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
                <div className="bg-white shadow-lg rounded-lg mb-4">
                    <div className="bg-blue-500 text-white p-4 text-center">
                        <p className="text-xl font-semibold">서명 진행중</p>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-700">
                            모바일(VMI) 구축사업 L2 스위치 인수인계 협의
                        </p>
                        <p className="text-gray-700">기안자 : 수요공급처 OOO</p>
                        <p className="text-gray-700">기안일자: 2023/08/23 16:00</p>
                        <button className="bg-blue-500 text-white p-2 rounded mt-4">
                            문서 보기
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 p-4">
                {/* 모달 창 */}
                <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300">
                    <p className="text-xl font-semibold">반려를 진행하겠습니까?</p>
                    <p className="text-gray-700">
                        반려 처리시 모든 프로세스가 종료됩니다
                    </p>
                    <div className="mt-4">
                        <button className="bg-red-500 text-white p-2 rounded mr-4">
                            아니오
                        </button>
                        <button className="bg-green-500 text-white p-2 rounded">
                            네 반려 처리합니다
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}