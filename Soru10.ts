class MathHelper {
  static PI:number=3.14159;
  // Statik PI
  static cevre(radius: number):number{
    return 2 * MathHelper.PI * radius;
  }
  // Statik calculateCircumference(radius: number) metodu
}

// Sınıfı 'new' ile oluşturmadan doğrudan kullanın
console.log(MathHelper.PI);
console.log(MathHelper.cevre(10));

// BEKLENEN EKRAN ÇIKTISI:
// 3.14159
// 62.8318
