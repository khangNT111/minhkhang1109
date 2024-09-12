import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const unitPrice = 141800; 
  const [quantity, setQuantity] = useState(1); 
  const [discountCode, setDiscountCode] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false); 

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleApplyDiscount = () => {
    
    console.log('Discount code:', discountCode);
  };

  const handleOrder = () => {
    
    setOrderSuccess(true);
  };

 
  const totalPrice = unitPrice * quantity;

  return (
    <View style={styles.container}>
      {}
      <View style={styles.productRow}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/33f638e35827aae54dc19d1365e68f24' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>{unitPrice.toLocaleString()} ₫</Text>
        </View>
      </View>

      {}
      <View style={styles.discountSection}>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.discountRow}>
          <TextInput
            style={styles.discountInput}
            placeholder="Mã giảm giá"
            value={discountCode}
            onChangeText={setDiscountCode}
          />
          <TouchableOpacity style={styles.applyButton} onPress={handleApplyDiscount}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {}
      <View style={styles.priceSection}>
        <Text style={styles.priceLabel}>Tạm tính</Text>
        <Text style={styles.priceValue}>{totalPrice.toLocaleString()} ₫</Text>
      </View>
      <View style={styles.priceSection}>
        <Text style={styles.totalLabel}>Thành tiền</Text>
        <Text style={styles.totalValue}>{totalPrice.toLocaleString()} ₫</Text>
      </View>

      {}
      <TouchableOpacity style={styles.proceedButton} onPress={handleOrder}>
        <Text style={styles.proceedButtonText}>Tiến hành đặt hàng</Text>
      </TouchableOpacity>

      {}
      {orderSuccess && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Đặt hàng thành công!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 110,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productProvider: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#f00',
    fontWeight: 'bold',
  },
  discountSection: {
    marginBottom: 20,
  },
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: '#007bff',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 16,
  },
  priceValue: {
    fontSize: 16,
    color: '#f00',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    color: '#f00',
    fontWeight: 'bold',
  },
  proceedButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d4edda',
    borderRadius: 5,
    alignItems: 'center',
  },
  successText: {
    color: '#155724',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
