import React, { useState, useEffect } from "react";

import { useTranslation } from '@/app/i18n/client'

function PoliciesItem({ lng }) {
    const { t } = useTranslation(lng, 'news')


    return (
        <>
            <div className="border border-violet">
                <div className="m-4 font-semibold text-base xl:my-7 xl:mx-9 ">
                    <p>
                        Політика відповідальності
                        перед постраждалим
                        населенням внаслідок
                        збройної агресії рф проти
                        України
                    </p>
                </div>
            </div>
        </>
    )
}

export default PoliciesItem;
