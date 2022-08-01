import React from 'react';

const Modal = () => {
    return (
        <>
            <input type="checkbox" id="popup-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="popup-modal" class="btn btn-sm bg-blue-900 btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Link Bank Account</h3>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Bank Name</span>
                        </label>
                        <select class="select select-bordered w-full">
                            <option disabled selected>Please Select a Bank</option>
                            <option>Bank Asia</option>
                            <option>Development Bank</option>
                            <option>Pubali Bank</option>
                        </select>
                        <label class="label">
                            <span class="label-text">Account Number</span>
                        </label>
                        <input type="text" placeholder="Account Number" class="input input-bordered w-full" />
                        <button class="btn btn-block hover:bg-blue-800 bg-blue-900 mt-7">Proceed</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;