import { useState, useRef, useEffect } from 'react';

export default function FileInput({ setValues }) {
  const [previewImage, setPreviewImage] = useState(null);
  const inputRef = useRef();

  const handlePreviewImage = (e) => {
    // preview 이미지 등록
    setPreviewImage(() => {
      return URL.createObjectURL(e.target.files[0]);
    });
  };

  const previewImageClear = () => {
    // preview 이미지 삭제
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(null);
    }
  };

  const handlePreviewClear = (e) => {
    // preview 이미지 삭제 핸들러
    if (!previewImage) return;
    previewImageClear();
    inputRef.current.value = '';
  };

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 클리어
      previewImageClear();
    };
  }, []);

  useEffect(() => {
    if (!previewImage) return;
    setValues((prev) => ({ ...prev, image: previewImage }));
  }, [previewImage, setValues]);
  return (
    <>
      <button
        type='button'
        onClick={() => {
          inputRef.current.click();
        }}>
        이미지 등록하기
      </button>
      <img src={previewImage} alt='사용자가 등록한 상품 이미지' />
      {previewImage && (
        <button type='button' onClick={handlePreviewClear}>
          삭제
        </button>
      )}
      <input
        id='ipt-files'
        type='file'
        name='images'
        ref={inputRef}
        hidden
        onChange={handlePreviewImage}
      />
    </>
  );
}
