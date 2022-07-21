import React from 'react';

const Modal = () => {
    return (
        <>
            <label for="my-modal-3" class="btn modal-button">open modal</label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm bg-blue-900 btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Link Bank Account</h3>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Bank Name</span>
                        </label>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Please Select a Bank</option>
                            <option>Bank Asia</option>
                            <option>Development Bank</option>
                            <option>Pubali Bank</option>
                        </select>
                        <label class="label">
                            <span class="label-text">Account Number</span>
                        </label>
                        <input type="text" placeholder="Account Number" class="input input-bordered w-full max-w-xs" />
                        <button class="btn btn-block bg-blue-900 mt-7">Proceed</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;