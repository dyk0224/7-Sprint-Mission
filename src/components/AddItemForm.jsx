import "../styles/AddItemForm.css";
import FileInput from "./FileInput";

function AddItemForm() {
  return (
    <div className="add-item-container">
      <div className="add-item-wrapper">
        <label className="add-item-register">상품 등록하기</label>
        <button className="add-item-register-button" disabled>
          등록
        </button>
      </div>

      <FileInput />

      <div className="add-item-title-input-wrapper">
        <label className="add-item-title-input-label">상품명</label>
        <input
          className="add-item-title-input"
          placeholder="상품명을 입력해주세요"
        />
      </div>

      <div className="add-item-description-textarea-wrapper">
        <label className="add-item-description-textarea-label">상품 소개</label>
        <textarea
          className="add-item-description-textarea"
          placeholder="상품 소개를 입력해주세요"
        />
      </div>

      <div className="add-item-price-input-wrapper">
        <label className="add-item-price-input-label">판매 가격</label>
        <input
          className="add-item-price-input"
          placeholder="판매 가격을 입력해주세요"
        />
      </div>

      <div className="add-item-tag-input-wrapper">
        <label className="add-item-tag-input-label">태그</label>
        <input
          className="add-item-tag-input"
          placeholder="태그를 입력해주세요"
        />
      </div>
    </div>
  );
}

export default AddItemForm;
