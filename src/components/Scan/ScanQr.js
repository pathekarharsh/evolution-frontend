import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';

const App = () => {
  const [qrCode, setQrCode] = useState('');
  const qrReaderRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setQrCode(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const openImageDialog = () => {
    qrReaderRef.current.openImageDialog();
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        ref={qrReaderRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {qrCode && <p>Scanned QR code: {qrCode}</p>}
      <button onClick={openImageDialog}>Scan QR code from image</button>
    </div>
  );
};

export default App;
