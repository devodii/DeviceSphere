


export namespace MathsFunctions {
   export function convertCurrency(currency: number) {
      const fn = new Intl.NumberFormat('en-Ng', {
         style: "currency",
         currency: "NGN"
      })
      return fn.format(currency)
   }
}

export const passwordAuth = async (password: any) => {
   const validatedPassword = 'chachods23'
   if (password === validatedPassword) {
      return {validatedPassword}
   }
   else {
      throw {
         message: "Invalid Password"
      }
   }
}


