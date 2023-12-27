import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';

const DeleteDataPopup = ({
  open,
  onClose,
  okButton = '',
  cancelButton = '',
  onClickOk,
  onClickCancel,
  alertMessage,
  icon,
  confirmationMessage,
  style,
  okBtnColor = 'error',
}) => (
  <div className="delete-data-popup">
    <Dialog open={open} onClose={onClose}>
      <div style={{ ...style }}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {icon}
          {confirmationMessage ? <h3 style={{ textAlign: 'center' }}>{confirmationMessage}</h3  > : <h2> </h2>}
          <DialogContentText sx={{ textAlign: 'center' }}>{alertMessage}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-around',padding:'10px', marginBottom:'10px'}}>
          {onClickCancel && (
            <Button
              sx={{
                backgroundColor: '#c1c1c1',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#c1c1c1',
                },
                fontSize: '0.875rem !important',
                fontWeight: '500',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase',
                minWidth: '80px',
                padding: '6px 8px',
                borderRadius: '4px',
              }}
              onClick={onClickCancel}
            >
              {cancelButton}
            </Button>
          )}
          <Button
            sx={{
              fontSize: '0.875rem !important',
              fontWeight: '500',
              lineHeight: '1.75',
              letterSpacing: '0.02857em',
              textTransform: 'uppercase',
              minWidth: '64px',
              padding: '6px 8px',
              borderRadius: '4px',
            }}
            variant="contained"
            onClick={onClickOk}
            color={okBtnColor}
          >
            {okButton}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  </div>
);

export default DeleteDataPopup;
