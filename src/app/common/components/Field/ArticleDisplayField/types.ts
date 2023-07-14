export interface ArticleDisplayFieldProps {
  name: string;
  title: string;
  scrollbar: boolean;
  dangerouslySetInnerHTML?: {__html: string} | undefined
}