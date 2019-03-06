'use strict'
const
/*Connect to bot */
bots = require('../backend/conf.js'),
/*Connect to bot */
axios = require('axios'),
bot=bots.bot,
Promise = require('bluebird');
Promise.config({
  cancellation: true
});
var option1 = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
					"resize_keyboard" :true,
                    "keyboard": [[{
                        text: "пошук"
						},
						{
						text: "вирішення"
						}]
					//["Cancel"]
					]
                }
            }
var option = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
					"resize_keyboard" :true,
                    "inline_keyboard": [
					[
					{
                        text: "вирішення проблеми  \ud83d\ude94",
						callback_data: 'fixproblem'
					},
					{
                        text: "пошук проблеми \ud83d\udc68",
						callback_data: 'problem'
					}
					],

					]
                }
            };


/*Start messaging */

bot.on("text", (messages) => {
	var fname = messages.chat.first_name.toUpperCase();
	if (messages.text === '/add' || messages.text === '/start'){


				bot.sendMessage(messages.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " Оберіть завдання  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )
			}

		/*
	else if (messages.text === '/help'){
		bot.sendMessage(messages.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " Оберіть завдання  \ud83d\udc47" + '*' +'``', option1).then(() => {
	bot.on('text', (msge)=>{
		console.log('this is msge: ' + msge.text);
		console.log('this is message: ' + messages.text);

		       	 if (msge.text==='пошук'){
					 //#########
					 bot.sendMessage(messages.chat.id, "для пошуку данних введіть приблизну назву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(messages.chat.id, " Назва проблеми = > " + mess.text + " вкажіть її вирішення  \ud83d\udd50  ")

					   .then(()=>{

		                                  var input = mess.text.trim();
										  console.log('This is INPUT:'+input );

										  axios({ method: 'get',
		                                  headers: {'Content-type': 'application/json; charset=utf8' },
  	                                      url: ('http://93.188.161.182:4001/api/getvalue1/'+encodeURI(input))})




															 .then(data=>data.data)
															 .then((result)=>{
																 var datas=[];
																 console.log('data.length' + ' ' + result.data.length);
																 result.data.map(dat=>{console.log(dat.message.text.problem); })
																 result.data.map(dat=>{datas.push('# ' + '``'+ '*'+  '-Назва-:' + '*'+ '``'+ dat.message.text.problem + '\n' + '``'+ '*'+ '-Вирішення-:' + '*'+ '``'+ dat.message.text.fixproblem + '-'+ ' #' + '\n')})
										if (result.data.length<=0) {
											bot.sendMessage(messages.chat.id, '``'+ '*'+ "нажаль за Вашим запитом :  = > " + mess.text + " " + " нічого не знайдено   повторіть спробу" + '\n'+
										'*'+ '``'+ '\n',option1,{parse_mode: "Markdown"} )
										}
                                        else {

										bot.sendMessage(messages.chat.id,
										datas + '\n'
										+  '``'+ '*'+ 'Не знaйшли вирішення спробуйте уточнити пошук повторно \ud83d\udc47 '+ '*'+ '``'+
										 '\n',option1,{parse_mode: "Markdown"} )
															}
										                })
									               .catch(error => {
										          throw error
									            })
									         })
                                          }) //bot,once
					                   })
					                }
					else if (msge.text==='вирішення'){
						//############
						bot.sendMessage(messages.chat.id, "для внесення данних введіть нвзву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(messages.chat.id, " Назва проблеми = > " + mess.text + " вкажіть її вирішення  \ud83d\udc47  ")

					   .then(()=>{
						//
						    bot.once("text",(messa)=>{
					            console.log("this is messa.text " + " " + messa.text + ' '  +  mess.text.length);

                                    bot.sendMessage(messages.chat.id, " вирішення проблеми :  = > " + messa.text + " отже :  \ud83d\udd50  ")
									  .then(()=>{

		                                  var input = mess.text.toUpperCase().trim();


										  axios.post('http://93.188.161.182:4001/api/insertvalue/',{
											                   username: message.from.first_name,
                                                               userid: message.from.id,
	                                                           messagechatid: message.chat.id,
						                                       messageid : message.id,
															   messageproblem:mess.text,
															   messagefixproblem:messa.text


										                        })
										  					 .then(()=>{
																 var messageproblem = mess.text;
																  axios.get('http://93.188.161.182:4001/api/getvalues/'+ encodeURI(messageproblem))
																  .then(data=>data.data)
																  .then((result)=>{
															console.log(result.data);
															bot.sendMessage(message.chat.id, " Отже ви зробили запис  : " + '\n'
															+ '``'+ '*'+ result.data[0].createdAt + '\n'
															+ result.data[0].user.name + '\n'
															+ result.data[0].message.text.problem + '\n'
															+ result.data[0].message.text.fixproblem + '*'+ '``'+ '\n',option,{parse_mode: "Markdown"} )
													    				    })
												    				   })
									                .catch(error => {
										           throw error
									              })
									           })
											})
						                 })
	                                  }) //bot,once
					               })
						      	}
				        	})
		                })
					}
					*/
					//else if пошук
					 if (messages.text==='пошук'){
					 //#########
					 bot.sendMessage(messages.chat.id, "для пошуку данних введіть приблизну назву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);
if (messages.text!='пошук' && !mess.text){bot.sendMessage(messages.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " я не розумію звичайного тексту використовуй меню  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )}
                    bot.sendMessage(messages.chat.id, " Назва проблеми = > " + mess.text + " вкажіть її вирішення  \ud83d\udd50  ")


					   .then(()=>{

		                                  var input = mess.text.trim();
										  console.log('This is INPUT:'+input );

										  axios({ method: 'get',
		                                  headers: {'Content-type': 'application/json; charset=utf8' },
  	                                      url: ('http://93.188.161.182:4001/api/getvalue1/'+encodeURI(input))})


										//axios.get("http://93.188.161.182:3001/api/getvalue1/"+input.trim())


															 .then(data=>data.data).catch(error => {throw error})
															 .then((result)=>{
																 var datas=[];
																 console.log('data.length' + ' ' + result.data.length);
																 result.data.map(dat=>{console.log(dat.message.text.problem); })
																 result.data.map(dat=>{datas.push('# ' + '``'+ '*'+  '-Назва-:' + '*'+ '``'+ dat.message.text.problem + '\n' + '``'+ '*'+ '-Вирішення-:' + '*'+ '``'+ dat.message.text.fixproblem + '-'+ ' #' + '\n')})
										if (result.data.length<=0) {
											bot.sendMessage(messages.chat.id, '``'+ '*'+ "нажаль за Вашим запитом :  = > " + mess.text + " " + " нічого не знайдено   повторіть спробу" + '\n'+
										'*'+ '``'+ '\n',option1,{parse_mode: "Markdown"} )
										}
                                        else {

										bot.sendMessage(messages.chat.id,
										datas + '\n'
										+  '``'+ '*'+ 'Не знaйшли вирішення спробуйте уточнити пошук повторно \ud83d\udc47 '+ '*'+ '``'+
										 '\n',option1,{parse_mode: "Markdown"} )
															}
										                }).catch(error => {throw error})
									         }).catch(error => {throw error})
                                          }) //bot,once
					                   }).catch(error => {throw error})
					                }
					else if (messages.text==='вирішення'){
						//############
						bot.sendMessage(messages.chat.id, "для внесення данних введіть нвзву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);
					 if (messages.text!='пошук' && !mess.text){bot.sendMessage(messages.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " я не розумію звичайного тексту використовуй меню  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )}
                    bot.sendMessage(messages.chat.id, " Назва проблеми = > " + mess.text + " вкажіть її вирішення  \ud83d\udc47  ")

					   .then(()=>{
						//
						    bot.once("text",(messa)=>{
					            console.log("this is messa.text " + " " + messa.text + ' '  +  mess.text.length);
					 if (messages.text!='пошук' && !messa.text){bot.sendMessage(messages.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " я не розумію звичайного тексту використовуй меню  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )}
                                    bot.sendMessage(messages.chat.id, " вирішення проблеми :  = > " + messa.text + " отже :  \ud83d\udd50  ")
									  .then(()=>{

		                                  var input = mess.text.toUpperCase().trim();


										  axios.post('http://93.188.161.182:4001/api/insertvalue/',{
											                   username: messages.from.first_name,
                                                               userid: messages.from.id,
	                                                           messagechatid: messages.chat.id,
						                                       messageid : messages.id,
															   messageproblem:mess.text,
															   messagefixproblem:messa.text


										                        })
										  					 .then(()=>{
																 var messageproblem = mess.text;
																  axios.get('http://93.188.161.182:4001/api/getvalue1/'+ encodeURI(messageproblem))
																  .then(data=>data.data).catch(error => {throw error})
																  .then((result)=>{
															console.log(result.data);
															bot.sendMessage(messages.chat.id, " Отже ви зробили запис  : " + '\n'
															+ '``'+ '*'+ result.data[0].createdAt + '\n'
															+ result.data[0].user.name + '\n'
															+ result.data[0].message.text.problem + '\n'
															+ result.data[0].message.text.fixproblem + '*'+ '``'+ '\n',option,{parse_mode: "Markdown"} )
													    				    }).catch(error => {throw error})
												    				   }).catch(error => {throw error})
									           }).catch(error => {throw error})
											})
						                 }).catch(error => {throw error})
	                                  }) //bot,once
					               }).catch(error => {throw error})
						      	}
					//else if пошук
//					else {bot.sendMessage(messages.chat.id, '``'+ '*'+'Please use menu  \ud83d\udc47  '+ '*' +'``', option1,{parse_mode: "Markdown",} )}
	            })
/*
axios.post("/api/insertvalue",
														                                                         {
                                                               username: message.from.first_name,
                                                               userid: message.from.id,
	                                                           messagechatid: message.chat.id,
						                                       messageid : message.id,
															   messageproblem:mess.text.toUpperCase(),
															   messagefixproblem:messa.text.toUpperCase()
                                                             })

//
*/

/*
bot.once("text", (message) => {
	console.log(message);
	var fname = message.chat.first_name.toUpperCase();
	var ex='';
	bot.sendMessage(message.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " Оберіть завдання  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )
	.then(() => {
	bot.on('callback_query', function (msge) {

		if (msge.data==='problem'){


			bot.sendMessage(message.chat.id, "для пошуку данних введіть приблизну назву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(message.chat.id, " Назва проблеми = > " + mess.text.toUpperCase() + " вкажіть її вирішення  \ud83d\udd50  ")

					   .then(()=>{

		                                  var input = mess.text.trim();
										  console.log('This is INPUT:'+input );

										  axios({ method: 'get',
		                                  headers: {'Content-type': 'application/json; charset=utf8' },
  	                                      url: ('http://93.188.161.182:4001/api/getvalue1/'+encodeURI(input))})

															 .then(data=>data.data)
															 .then((result)=>{
																 var datas=[];
																 console.log('data.length' + ' ' + result.data.length);
																 result.data.map(dat=>{console.log(dat.message.text.problem); })
																 result.data.map(dat=>{datas.push('# ' + '``'+ '*'+  '-Назва-:' + '*'+ '``'+ dat.message.text.problem + '\n' + '``'+ '*'+ '-Вирішення-:' + '*'+ '``'+ dat.message.text.fixproblem + '-'+ ' #' + '\n')})
										if (result.data.length<=0) {
											bot.sendMessage(message.chat.id, '``'+ '*'+ "нажаль за Вашим запитом :  = > " + mess.text.toUpperCase() + " " + " нічого не знайдено   повторіть спробу" + '\n'+
										'*'+ '``'+ '\n',option,{parse_mode: "Markdown"} )
										}
                                        else {

										bot.sendMessage(message.chat.id,
										datas + '\n'
										+  '``'+ '*'+ 'Не знaйшли вирішення спробуйте уточнити пошук повторно \ud83d\udc47 '+ '*'+ '``'+
										 '\n',option,{parse_mode: "Markdown"} )


										}
										  })
									 .catch(error => {
										 throw error
									 })

	})

	}) 	 })

					 }

		if (msge.data==='fixproblem'){


			bot.sendMessage(message.chat.id, "для отримання данних введіть нвзву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(message.chat.id, " Назва проблеми = > " + mess.text.toUpperCase() + " вкажіть її вирішення  \ud83d\udd50  ")

					   .then(()=>{
						//
						    bot.once("text",(messa)=>{
					            console.log("this is messa.text " + " " + messa.text + ' '  +  mess.text.length);

                                    bot.sendMessage(message.chat.id, " вирішення проблеми :  = > " + messa.text.toUpperCase() + " отже :  \ud83d\udd50  ")
									  .then(()=>{

		                                  var input = mess.text.toUpperCase().trim();


										  axios.post('http://93.188.161.182:4001/api/insertvalue/',{
											                   username: message.from.first_name,
                                                               userid: message.from.id,
	                                                           messagechatid: message.chat.id,
						                                       messageid : message.id,
															   messageproblem:mess.text,
															   messagefixproblem:messa.text


										                        })
										  					 .then(()=>{
																 var messageproblem = mess.text;
																  axios.get('http://93.188.161.182:4001/api/getvalues/'+ encodeURI(messageproblem))
																  .then(data=>data.data)
																  .then((result)=>{
															console.log(result.data);
															bot.sendMessage(message.chat.id, " Отже ви зробили запис  : " + '\n'
															+ '``'+ '*'+ result.data[0].createdAt + '\n'
															+ result.data[0].user.name + '\n'
															+ result.data[0].message.text.problem + '\n'
															+ result.data[0].message.text.fixproblem + '*'+ '``'+ '\n',option,{parse_mode: "Markdown"} )
																	    })



										  })
									 .catch(error => {
										 throw error
									 })
									  })

							})


	})

	})
					 })

					 }




	})
	})


})
*/
/*
//###################################################### bot once ##############################################
bot.once("text", (message) => {
	console.log(message);
	var fname = message.chat.first_name.toUpperCase();
	var ex='';
	bot.sendMessage(message.chat.id, '``'+ '*'+ " Привіт " + ' ' + fname +  " Оберіть завдання  \ud83d\udc47" + '*' +'``', option1,{parse_mode: "Markdown",} )
	.then(() => {
	bot.on('text', (msge)=> {
		//###########################################################################   if search problem #################################################
		if (msge.text==='пошук'){


			bot.sendMessage(message.chat.id, "для пошуку данних введіть приблизну назву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(message.chat.id, " Згідно вказаної проблеми = > " + mess.text + " є наступна інформація  \ud83d\udc47  ")

					   .then(()=>{

		                                  var input = mess.text.trim();
										  console.log('This is INPUT:'+input );

										  axios({ method: 'get',
		                                  headers: {'Content-type': 'application/json; charset=utf8' },
  	                                      url: ('http://93.188.161.182:4001/api/getvalue1/'+encodeURI(input))})





															 .then(data=>data.data).catch(error => {throw error })
															 .then((result)=>{
																 var datas=[];
																 console.log('data.length' + ' ' + result.data.length);
																 result.data.map(dat=>{console.log(dat.message.text.problem); })
																 result.data.map(dat=>{datas.push('# ' + '``'+ '*'+  '-Назва-:' + '*'+ '``'+ dat.message.text.problem + '\n' + '``'+ '*'+ '-Вирішення-:' + '*'+ '``'+ dat.message.text.fixproblem + '-'+ ' #' + '\n')})
										if (result.data.length<=0) {
											bot.sendMessage(message.chat.id, '``'+ '*'+ "нажаль за Вашим запитом :  = > " + mess.text + " " + " нічого не знайдено   повторіть спробу" + '\n'+
										'*'+ '``'+ '\n',option1,{parse_mode: "Markdown"} )
										}
                                        else {

										bot.sendMessage(message.chat.id,
										datas + '\n'
										+  '``'+ '*'+ 'Не знaйшли вирішення спробуйте уточнити пошук повторно \ud83d\udc47 '+ '*'+ '``'+
										 '\n',option1,{parse_mode: "Markdown"} )


										}
										  }).catch(error => {throw error})


	}).catch(error => {throw error })

	}) //bot,once
					 }).catch(error => {throw error })

					 }
		//###########################################################################   if search problem #################################################
		if (msge.text==='вирішення'){


			bot.sendMessage(message.chat.id, "для внесення данних введіть нвзву проблеми  \ud83d\udc47 ").then(() => {

				 bot.once("text",(mess)=>{
					 console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);

                    bot.sendMessage(message.chat.id, " ОК. Назва проблеми = > " + mess.text + " Тепер вкажіть її вирішення  \ud83d\udc47  ")

					   .then(()=>{
						//
						    bot.once("text",(messa)=>{
					            console.log("this is messa.text " + " " + messa.text + ' '  +  mess.text.length);

                                    bot.sendMessage(message.chat.id, "Ваш Запис успішно виконано :  \ud83d\udc47  ")
									  .then(()=>{

		                                  var input = mess.text.toUpperCase().trim();


										  axios.post('http://93.188.161.182:4001/api/insertvalue/',{
											                   username: message.from.first_name,
                                                               userid: message.from.id,
	                                                           messagechatid: message.chat.id,
						                                       messageid : message.id,
															   messageproblem:mess.text,
															   messagefixproblem:messa.text


										                        })
										  					 .then(()=>{
																 var messageproblem = mess.text;
																  axios.get('http://93.188.161.182:4001/api/getvalue1/'+ encodeURI(messageproblem))
																  .then(data=>data.data)
																  .then((result)=>{
															console.log(result.data);
															bot.sendMessage(message.chat.id, " Отже ви зробили запис  : " + '\n'
															+ '``'+ '*'+ result.data[0].createdAt + '\n'
															+ result.data[0].user.name + '\n'
															+ result.data[0].message.text.problem + '\n'
															+ result.data[0].message.text.fixproblem + '*'+ '``'+ '\n',option1,{parse_mode: "Markdown"} )
																	    })



										  }).catch(error => {throw error})
									  }).catch(error => {throw error })

							})
						//

	}).catch(error => {throw error })

	}) //bot,once
					 }).catch(error => {throw error })

					 }
					 else if (msge.text!='вирішення' || msge.text != 'пошук'){
						 console.log(
						 'This is msge.text yahoo ' + msge.text + ' ' + '\n' +
						 'This is message.text yahoo' + message.text


						 );


					 }
					 else
					 {bot.sendMessage(message.chat.id, '``'+ '*'+ "Я не розумію мови користуйтесь будь-ласка меню : \ud83d\udc47 " +
										'*'+ '``'+ '\n',option1,{parse_mode: "Markdown"} )
						 }



		//
	})
	})


})
//##################################################### bot once  ##############################################

*/
