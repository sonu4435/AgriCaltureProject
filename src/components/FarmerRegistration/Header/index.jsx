import React, { useEffect, useState } from "react";
import { CloseSVG } from "../../../assets/image";
import { Img, Button, Input } from "../../Cindex";
import { signOut } from "firebase/auth";
import { auth } from "Server/FireBase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getOrderId } from "components/SendGetData";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [hidden, setHidden] = React.useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    document.querySelector('.rare').addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        getOrderId(e.target.value).then((res) => {
          setSearchValue(res);
        })
      }
    })
  }, []);

  const nvigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      nvigate("/");
    }).catch((error) => {
      toast.error(error, {
        position: "top-right",
      });
    });
  }
  return (
    <header {...props}>
      <ToastContainer />
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1128px]">
        <Input
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8c8787ff" />
            ) : (
              <Img src="../../../../public/Cimages/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
            )
          }
          className="w-[29%] h-[3rem] !text-lg rare"
        />
        <div className="flex relative flex-row justify-between items-center w-auto gap-5">
          <div className="flex flex-col">
            <Button color="gray_50" size="lg" className="w-[35px] h-[35px] rounded-[17px]">
              <Img src="/Cimages/img_group_259.svg" />
            </Button>
          </div>
          <Img src={props.userdetails.photoURL} alt="circleimage" className="h-10 w-10 rounded-[50%]" />
          <Button color="gray_50" size="lg" className=" h-20 w-[13vw] flex items-center justify-center font-medium overflow-hidden ml-2 text-gray-900 border border-black px-10 py-6">
            <Link to={`/${props.userdetails.uid}/addproduct`}>
              Register as a Farmer
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
