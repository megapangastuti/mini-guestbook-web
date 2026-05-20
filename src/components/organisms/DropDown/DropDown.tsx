import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  id: string;
  options: string[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
};

function DropDown({ id, options = [], value, onChange, placeholder = "Select One" }: Props) {
  return (
    <Menu as="div" id={id} className="relative w-full">
      <MenuButton
        className="
          inline-flex
          w-full
          items-center
          justify-between
          rounded-sm
          border
          border-white/20
          bg-white/10
          px-4
          py-2.25
          text-sm
          text-white
          backdrop-blur-lg
          shadow-lg
          hover:bg-white/20
          transition
          outline-none
        "
      >
        {value || placeholder}

        <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-300" />
      </MenuButton>

      <MenuItems
        transition
        className="
          absolute
          z-50
          mt-2
          w-full
          origin-top-right
          rounded-sm
          border
          border-white/10
          bg-gray-900/95
          backdrop-blur-xl
          shadow-2xl
          outline-none
          transition
          data-closed:scale-95
          data-closed:opacity-0
          data-enter:duration-100
          data-leave:duration-75
        "
      >
        <div className="py-1">
          {options.map((item) => (
            <MenuItem key={item}>
              <button
                type="button"
                onClick={() => onChange(item)}
                className="
                  block
                  w-full
                  px-4
                  py-2
                  text-left
                  text-sm
                  text-gray-200
                  transition
                  data-focus:bg-white/10
                  data-focus:text-white
                  outline-none
                "
              >
                {item}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DropDown;
