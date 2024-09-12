import React, { useState } 
from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } 
from 'react-native';

export default function App() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = () => {
    
    setIsSubmitted(true); 
    setComment(''); 
    setRating(0); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>



        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/53372af46f7c0cc7f2b0bb0368959bff' }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
        
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth
        </Text>
      </View>

      <Text style={styles.subTitle}>Cực kỳ hài lòng</Text>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
            <Image
              source={{
                uri: rating > index
                  ? 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0479401477a1c39983a8a56ed7745a47' 
                  : 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0479401477a1c39983a8a56ed7745a47', 
              }}
              style={styles.starIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.imageButton}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7a08d51a9daaf1e57a675f39363dae8f' }}
          style={styles.addImageIcon}
        />
        <Text style={styles.addImageText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.commentBox}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.submitButton} 
        onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </TouchableOpacity>

      {isSubmitted && ( 
        <Text style={styles.successMessage}> Đã gửi thành công!</Text>
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
  productInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  starIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  imageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  addImageIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  addImageText: {
    fontSize: 16,
    color: '#000',
  },
  commentBox: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  successMessage: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
});
