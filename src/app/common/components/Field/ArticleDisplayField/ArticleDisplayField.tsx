import React, { useRef } from 'react';
import { useField } from 'formik';
import { ArticleDisplayFieldProps } from './types';

const ArticleDisplayField: React.FC<ArticleDisplayFieldProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [field,, helpers] = useField(props.name);

  /** 
   * @description 檢查滾動至文字內容底部
   */
  const handleCheckScrollToBottom = () => {
    if (!contentRef.current) return
    /** 內容框的高度 */
    const contentHeight = contentRef.current.clientHeight;
    /** 內容的高度 */
    const scrollHeight = contentRef.current.scrollHeight
    /** 與最初位置的高度距離 */
    const scrollTop = Math.ceil(contentRef.current.scrollTop)
    /** 若與最初位置高度 >= (內容的高度-內容框的高度) 且 field 尚未設定值 */
    if ((scrollTop >= scrollHeight - contentHeight) && !field.value) helpers.setValue(true)
  }

  return (
    <section id="article-display-field">
      <div className="box read-box">
        <div className="head">
          <p>{props.title.toUpperCase()}</p>
          {props.scrollbar && (
            <div className="notes">Please scroll to the end of the article.</div>
          )}
        </div>
        <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} className="body" ref={contentRef} onScroll={handleCheckScrollToBottom}>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default ArticleDisplayField;
