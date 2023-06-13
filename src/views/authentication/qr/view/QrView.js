import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Container } from '@mui/material';

export const QrView = (props) => {
  const { isLoading, qrImageByteArray } = props;

  // Convert byte array to base64 data URL
  const qrImageDataUrl = `data:image/png;base64,${btoa(
    String.fromCharCode.apply(null, qrImageByteArray)
  )}`;

  return (
    <Card>
      <CardContent style={{ textAlign: 'center' }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {qrImageByteArray === null ? (
              <Container>
                <Typography variant={'h4'}>No QR Found</Typography>
              </Container>
            ) : (
              <>
                <img src={qrImageDataUrl} alt="QR Code" style={{ width: 200, height: 200 }} />
                <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                  Your text goes here
                </Typography>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
