import React, { useState } from 'react';
import './Transaction.css';
import { CSpinner } from '@coreui/react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleWalletChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const firebaseConfig = {
    apiKey: "AIzaSyCXN7FJNtg3_9QzHht6Hh0XDJFQvH16nUI",
    authDomain: "news-project-eb4a3.firebaseapp.com",
    projectId: "news-project-eb4a3",
    storageBucket: "news-project-eb4a3.appspot.com",
    messagingSenderId: "476540176552",
    appId: "1:476540176552:web:69ef131a05bda391dfda9d",
    measurementId: "G-KW9MKMC2PZ"
  };
  const showAlert = (message) => {
    alert(message);
  };
  const upload = async (walletAddress, amount) => {
    setIsUploading(true); 
    console.log("uploaded");
    try {
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const docRef = await addDoc(collection(firestore, 'transactions'), {
        walletAddress,
        amount,
      });
      setAmount('');
      setWalletAddress('');
      showAlert('Data uploaded successfully!');
      console.log(`Transaction stored with ID: ${docRef.id}`);
    } catch (error) {
      showAlert(error);
      console.error('Error storing transaction:', error);
    }finally {
      setIsUploading(false); 
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!walletAddress.trim() || !isValidWalletAddress(walletAddress)) {
      setError('Please enter a valid Ethereum wallet address (0x...).');
      return;
    }

    
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      setError('Please enter a valid amount between 0 and 10,000.');
      return;
    }

    // If validation passes, you can proceed with your transaction logic
    setError(''); // Clear any previous errors
    // Now we have to save details in firebase
    upload(walletAddress, amount);
    // console.log('Transaction submitted:', { walletAddress, amount });
  };

  const isValidWalletAddress = (address) => {
    // Implement your Ethereum address validation logic
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  return (
    <div className="transaction-container">
      <div className='conatiner'>
        <h2>Transaction</h2>
        <form onSubmit={handleSubmit}>
          
        {isUploading && <CSpinner className="m-5" />}

          <div className="form-group">
            <label htmlFor="walletAddress">Wallet Address:</label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={handleWalletChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <button type="submit">Submit Transaction</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>

    </div>
  );
};

export default Transaction;
