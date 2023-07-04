import { ModalNamesEnum } from '../../../../core/enums/ui/modals';

export interface ModalProps {
  name: ModalNamesEnum;
  className?: string;
  title?: string;
  confirmBtnText?: string | JSX.Element;
  cancelBtnText?: string | JSX.Element;
  visible: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}
