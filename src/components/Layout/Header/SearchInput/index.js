import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDebounce } from "@uidotdev/usehooks";

const Input = styled.input`
  flex: 1;
  background-color: hsla(238, 27%, 12%, 50%);
  text-align: center;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  color: hsl(242, 3%, 55%);
  padding: 7px 10px;
  margin-top: 2px;
  font-size: 14px;
  &:focus {
    font-weight: 500;
    border-color: #7b7bf0;
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const SearchInput = () => {
  const router = useRouter();

  const [searchString, setSearchString] = useState(router.query.q || "");

  const debouncedSearchString = useDebounce(searchString, 300);

  const onInputChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  const onFocus = () => {
    if (router.pathname !== "/search") {
      router.push("/search");
    }
  };

  useEffect(() => {
    router.push(`/search?q=${debouncedSearchString}`);
  }, [debouncedSearchString]);

  return (
    <Input
      value={searchString}
      onFocus={onFocus}
      onChange={onInputChange}
      placeholder="Search through over 30 million prodcasts ans episodes..."
      style={{ flex: 1 }}
    />
  );
};
