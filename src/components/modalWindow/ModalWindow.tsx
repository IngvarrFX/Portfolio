import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useEffect} from "react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

type ModalPropsType = {
    isShow: boolean
    callBack: (value: boolean) => void
}

export default function ModalWindow(props: ModalPropsType) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        props.callBack(false)
    };

    useEffect(() => {
        setOpen(props.isShow)
    }, [props.isShow])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Email sent
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Thank you, I will contact you soon.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
