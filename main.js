alert('Вас приветствует приложение "Алкотестер"')
alert('Сейчас вам будет предложено решить несколько примеров для установления степени опьянения. Удачи!')

while(true)
{
	let a = Math.floor(Math.random() * (10 + 10)) - 10
	let b = Math.floor(Math.random() * (10 + 10)) - 10
	let choice = Math.floor(Math.random()*4)

	if(b==0)
	{
	 alert('Error!')
	 break
	}
	
	if (choice==0)
	{
		let res=+(a+b)
		let res1=prompt('Сумма '+`${a}`+' и '+`${b}`+' = ')
		if(res==res1)alert('Наливай ещё!')
			else break
	}
	
	if (choice==1)
	{
		let res=+(a-b)
		let res1=prompt('Разность '+`${a}`+' и '+`${b}`+' = ')
		if(res==res1)alert('Наливай ещё!')
			else break
	}

	if (choice==2)
	{
		let res=+(a*b)
		let res1=prompt('Произведение '+`${a}`+' и '+`${b}`+' = ')
		if(res==res1)alert('Наливай ещё!')
			else break
	}

	if (choice==3)
	{
		let res=+(a/b)
		let res1=prompt('Частное '+`${a}`+' и '+`${b}`+' = '+'(округление до десятых)')
		if(res.toFixed(1)==res1)alert('Наливай ещё!')
			else break
	}
}
alert('Харэ бухать!')
