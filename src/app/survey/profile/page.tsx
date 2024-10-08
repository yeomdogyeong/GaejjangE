"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import baejjange from "../../../../public/Ellipse11.png";
import gaemi from "../../../../public/Ellipse21.png";
import camera from "../../../../public/camera.png";
import { useUserColor } from "@/store/userColorContext";
import { useRouter } from "next/navigation";
import { getUserMyInfo, postUserOnboarding } from "@/apis/user/user";
import { postFile } from "@/apis/file/file";
import { FileType } from "@/types/apis/file";
import { HOME_PATH } from "@/store/path";
import useMyStore from "@/store/useMyStore";
import { SubjectType } from "@/types/common";
import imageCompression from "browser-image-compression";
import { Loader } from "@/components/loader/Loader";

export default function Main() {
  const [select, setSelect] = useState(true);
  const setInitializeState = useMyStore((state) => state.setInitializeState);
  const [isFocused, setIsFocused] = useState(false);
  const userColor = useUserColor();
  const [userType, setUserType] = useState<SubjectType>();
  const router = useRouter();
  const [url, setUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File>();
  const [userNickname, setUserNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const handleToMain = async () => {
    if (file) {
      const { data } = await postFile(FileType.USER_IMAGE, file);
      await postUserOnboarding({
        nickname: userNickname,
        tendency: userType,
        profileImagePath: data.data.path,
      });
    } else {
      await postUserOnboarding({
        nickname: userNickname,
        tendency: userType,
      });
    }

    const { data: infoData } = await getUserMyInfo();
    setInitializeState({
      ...infoData.data,
    });
    router.push(HOME_PATH);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.currentTarget.files as FileList;
    let file = fileList[0];

    const resizingBlob = await imageCompression(file, {
      maxSizeMB: 1.0,
      maxWidthOrHeight: 1920,
    });
    file = new File([resizingBlob], file.name, {
      type: file.type,
    });

    const url = window.URL.createObjectURL(file);

    setUrl(url);
    setFile(file);
  };

  const handleUserName = (e: any) => {
    setUserNickname(e.target.value);
  };

  useEffect(() => {
    if (userColor === "mainGreen") {
      setUserType(SubjectType.BAEZZANGE);
    } else {
      setUserType(SubjectType.GAEMI);
    }

    if (userColor) {
      setLoading(false);
    }
  }, [userColor]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start bg-gray-50 h-full pt-[32px]">
      {/* <ProgressBar srcImg={onestep} /> */}

      <div className="w-full flex justify-between items-center ">
        <div className="self-start ml-[20px] mb-[32px]">
          <p className="text-[24px] font-bold">개미와 베짱이에서</p>
          <p className="text-[24px] font-bold">어떤 프로필로 활동할까요?</p>
        </div>
      </div>
      {url ? (
        <div className="w-[103px] h-[100px] rounded-full overflow-hidden flex justify-center items-center border-2 border-gray-100">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept={"image/jpeg, image/png"}
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Image src={url} alt="user-upload-img" width={103} height={100} />
          </label>
        </div>
      ) : (
        <div className="relative flex justify-center items-center mb-[24px] cursor-pointer">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept={"image/jpeg, image/png"}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <label htmlFor="fileInput">
            {userColor === "mainGreen" ? (
              <Image
                alt="user-img"
                src={baejjange}
                width={103}
                height={100}
                onClick={() => fileInputRef.current?.click()}
              />
            ) : (
              <Image
                alt="user-img"
                src={gaemi}
                width={103}
                height={100}
                onClick={() => fileInputRef.current?.click()}
              />
            )}

            <p className="absolute bottom-0 right-0">
              <Image alt="user-img" src={camera} width={40} />
            </p>
          </label>
        </div>
      )}

      <div className="w-full px-[20px]">
        <div className="relative flex h-100">
          <input
            className={`border-b-2 bg-gray-50 w-full h-[40px] font-[400] focus:outline-none focus:border-${userColor} pr-10`}
            placeholder="닉네임을 입력해주세요"
            value={userNickname}
            onChange={handleUserName}
          />
          <div
            onClick={() => setUserNickname("")}
            className="absolute right-0 top-0 h-full flex items-center pr-3"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75 15.5C3.60775 15.5 0.25 12.1423 0.25 8C0.25 3.85775 3.60775 0.5 7.75 0.5C11.8923 0.5 15.25 3.85775 15.25 8C15.25 12.1423 11.8923 15.5 7.75 15.5ZM7.75 6.9395L5.629 4.81775L4.56775 5.879L6.6895 8L4.56775 10.121L5.629 11.1823L7.75 9.0605L9.871 11.1823L10.9323 10.121L8.8105 8L10.9323 5.879L9.871 4.81775L7.75 6.9395Z"
                fill="#CCCCCC"
              />
            </svg>
          </div>
        </div>

        <div className="w-full self-start mt-[8px] text-gray-600">
          6자리 이내, 문자/숫자 가능, 특수문자/기호 입력불가
        </div>
      </div>

      <button
        className={`${
          select ? `bg-${userColor}` : ""
        } disabled flex flex-col items-center justify-center absolute w-[500px] max-w-[100vw]  max-h-[10vh] h-[90px] bg-gray-100 bottom-0 p-2 rounded-t-sm`}
        onClick={handleToMain}
      >
        <span
          className={`${
            select ? "text-white" : "text-gray-400"
          } flex justify-center items-center w-full text-lg`}
        >
          개짱이 시작하기
        </span>
      </button>
    </div>
  );
}
