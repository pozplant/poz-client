import Modal from "@/src/components/Modal";
import Typo from "@/src/components/Typo";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export type DialogConfig = {
  title: string;
  desc?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};

type Props = {
  isOpen: boolean;
  close: () => void;
  unmount: () => void;
  config: DialogConfig;
};

function Dialog({ isOpen, close, unmount, config }: Props) {
  const { title, desc, confirmLabel, cancelLabel, onConfirm, onCancel } =
    config;

  const handleCancel = () => {
    close();
    onCancel?.();
  };

  const handleConfirm = () => {
    close();
    onConfirm();
  };

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      unmount={unmount}
      className="self-center w-[320px] gap-5 bg-white px-5 pt-5 pb-4 rounded-xl"
    >
      <View className="items-center justify-center">
        <Typo variant="H1">{title}</Typo>
        {desc && <Typo variant="B1">{desc}</Typo>}
      </View>

      <View className="items-center justify-center gap-4">
        <TouchableOpacity
          onPress={handleConfirm}
          className="w-full items-center justify-center p-4 bg-primary rounded-xl"
        >
          <Typo variant="Label" className="text-white">
            {confirmLabel ?? "확인하기"}
          </Typo>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} className="p-1">
          <Typo variant="B1" className="text-text60">
            {cancelLabel ?? "취소하기"}
          </Typo>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Dialog;
