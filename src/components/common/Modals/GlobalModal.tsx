import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function GlobalModal({
  open,
  setOpen,
  onClose,
  children,
  actions,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  const cancelButtonRef = useRef(null);

  const _onClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={_onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center xs:items-center xs:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
              enterTo="opacity-100 translate-y-0 xs:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 xs:scale-100"
              leaveTo="opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all xs:my-8 xs:w-full xs:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 xs:p-6 xs:pb-4">
                  {/* <div className='xs:flex xs:items-start'>
										<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 xs:mx-0 xs:h-10 xs:w-10'>
											<ExclamationTriangleIcon
												className='h-6 w-6 text-red-600'
												aria-hidden='true'
											/>
										</div>
										<div className='mt-3 text-center xs:ml-4 xs:mt-0 xs:text-left'>
											<Dialog.Title
												as='h3'
												className='text-base font-semibold leading-6 text-gray-900'>
												Deactivate account
											</Dialog.Title>
											<div className='mt-2'>
												<p className='text-sm text-gray-500'>
													Are you sure you want to deactivate your account? All
													of your data will be permanently removed. This action
													cannot be undone.
												</p>
											</div>
										</div>
									</div> */}
                  {children}
                </div>
                <div className="bg-gray-50 px-4 py-3 xs:flex xs:flex-row-reverse xs:px-6">
                  {actions}
                  {/* <button
										type='button'
										className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 xs:ml-3 xs:w-auto'
										onClick={_onClose}>
										Deactivate
									</button> */}
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 xs:mt-0 xs:w-auto"
                    onClick={_onClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
