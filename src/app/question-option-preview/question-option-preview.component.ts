import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-question-option-preview',
  templateUrl: './question-option-preview.component.html',
  providers: [WebService],
  styleUrls: ['./question-option-preview.component.css']
})
export class QuestionOptionPreviewComponent implements OnInit {
  return_msg1;
  lang_id=1;
  question_title_arr=Array();

  Menu_Modules_Link_Id;
  Menu_Module_Id;
  Menu_Module_Name;
  Menu_Module_Href;
  Menu_Module_Name_add;
  Menu_Module_Href_add;
  Menu_Module_Active=false;
  returnmsg1;
  returnmsg2;
  returnmsg3;
  returnmsg4;
  returnmsg5;
  returnmsg6;
  returnmsg7;
  returnmsg8;
  returnmsg9;
  returnmsg10;
  selected_language=1;

  Question_MarksAllocated;
  Question_PauseTime;
  Question_WaitTime;
  question_id;

  option_id;

  Option_Active;
  Option_Marks;
  Option_QuestionId;
  Option_skip;

  constructor(private webservice:WebService) { }

  ngOnInit() {
    const body1={
      test_id:52
    };
    this.webservice.webRequest(this,'post',this.webservice.get_question_option,body1,'21','');
    const body10={
    };
    this.webservice.webRequest(this,'post',this.webservice.get_language,body10,'10','');
  }

  add_question(){
    const body1 = {
      Question_Test_Id:52,
      Question_Type:'radio',
      Question_MarksAllocated:this.Question_MarksAllocated,
      Question_PauseTime:this.Question_PauseTime,
      Question_WaitTime:this.Question_WaitTime,
      Question_NumOfOption:10,
      Question_Answer:0,
      Platform:0,
      order_no:0,
      Question_Active:1,
      question_title_arr:this.question_title_arr
    };
    this.webservice.webRequest(this,'post',this.webservice.save_question,body1,'1','');
  }

  edit_question(){
    const body8={
    Question_Test_Id:52,
    Question_Id:this.question_id,
    Question_Type:'radio',
    Question_MarksAllocated:this.Question_MarksAllocated,
    Question_PauseTime:this.Question_PauseTime,
    Question_WaitTime:this.Question_WaitTime,
    Question_NumOfOption:10,
    Question_Answer:0,
    Platform:0,
    order_no:0,
    Question_Active:1,
    question_title_arr:this.question_title_arr
    }
    this.webservice.webRequest(this,'post',this.webservice.save_question,body8,'8','');
  }

  delete_question(j){
    console.log("delete_question",j);
    const body5 = {
      Question_Test_Id:52,
      Question_Id:j,
      Question_Active:0
    };
    this.webservice.webRequest(this,'post',this.webservice.save_question,body5,'5','');
  }
  store_question_id(i){
    this.question_id=i;
    const body4={
      // test_id:52,
      question_id:this.question_id
    }
    this.webservice.webRequest(this,'post',this.webservice.get_question,body4,'4','');
  }

  store_option_id(i,j){
    this.question_id=i;
    this.option_id=j;
    const body6={
      option_id:j
    }
    this.webservice.webRequest(this,'post',this.webservice.get_option,body6,'6','');
  }

  add_option_store(i){
    this.question_id=i;
  }

  add_option(){
    const body7={
      Option_skip:11,
      Option_Marks:10,
      Option_Active:1,
      question_id:this.question_id
    };
    this.webservice.webRequest(this,'post',this.webservice.save_option,body7,'7','');
  }

  edit_option(){
    const body9={
      Option_Id:this.option_id,
      Option_skip:11,
      Option_Marks:10,
      Option_Active:1,
    };
    this.webservice.webRequest(this,'post',this.webservice.save_option,body9,'9','');
  }

  delete_option(i){
    console.log('delete_option',i);
    const body3 = {
      Option_Id:i,
      Option_Active:0
    };
    this.webservice.webRequest(this,'post',this.webservice.save_option,body3,'3','');
  }

  webresponse(fun_id,return_data)
  {
    if(fun_id==21)
    {
      this.return_msg1=return_data.json();
      console.log('ques_option',this.return_msg1);
      var i;
      var j;
      var k;
      var temp=Array();
      var temp_opt=Array();
      var temp2;
      for(i=0;i<this.return_msg1.question.length;i++)
      {
        for(j=0;j<this.return_msg1.question[i].Question_Title.length;j++)
        { 
          temp[this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id]={};
          temp[this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id].que_lang_link_language_id=this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id;
          temp[this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id].que_lang_link_question_title=this.return_msg1.question[i].Question_Title[j].que_lang_link_question_title;
          // this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id;
          // this.return_msg1.question[i].Question_Title[j]=
        }
        if(temp.length>=0)
        {
          for(j=0;j<temp.length;j++)
          { 
            this.return_msg1.question[i].Question_Title[j]={};
            if(temp[j])
            {
              this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id=temp[j].que_lang_link_language_id;
              this.return_msg1.question[i].Question_Title[j].que_lang_link_question_title=temp[j].que_lang_link_question_title;
            }
            else
            {
              this.return_msg1.question[i].Question_Title[j].que_lang_link_language_id=0;
              this.return_msg1.question[i].Question_Title[j].que_lang_link_question_title='empty';
            }
          }
        }
      }

      for(i=0;i<this.return_msg1.question.length;i++)
      {
        console.log(this.return_msg1.question[0].option.length);
        for(j=0;j<this.return_msg1.question[i].option.length;j++)
        {
          for(k=0;k<this.return_msg1.question[i].option[j].Option_Value.length;k++)
          {
            temp_opt[this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id]={};
            temp_opt[this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id].opt_lang_link_language_id=this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id;
            temp_opt[this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id].opt_lang_link_option_value=this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_option_value;
          }
          if(temp_opt.length>=0)
          {
            console.log('teest',temp_opt);
            for(k=0;k<temp_opt.length;k++)
            { 
              this.return_msg1.question[i].option[j].Option_Value[k]={};
              if(temp_opt[k])
              {
                this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id=temp_opt[k].opt_lang_link_language_id;
                this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_option_value=temp_opt[k].opt_lang_link_option_value;
              }
              else
              {
                this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_language_id=0;
                this.return_msg1.question[i].option[j].Option_Value[k].opt_lang_link_option_value='empty';
              }
            }
          }
        }
      }
      console.log('ques_option_recreated',temp)
      console.log('ques_option2',this.return_msg1);
    }
    if(fun_id==1)
    {
      this.returnmsg1 = return_data.json();
      console.log('returnmsg1',this.returnmsg1);
    }
    if(fun_id==2)
    {
      this.returnmsg2 = return_data.json();
      console.log('returnmsg2',this.returnmsg2);
    }
    if(fun_id==3)
    {
      this.returnmsg3 = return_data.json();
      // this.refresh();
      console.log('returnmsg3',this.returnmsg3);
    }
    if(fun_id==4)
    {
      this.returnmsg4=return_data.json();
      this.Question_MarksAllocated=this.returnmsg4.question[0].Question_MarksAllocated;
      this.Question_PauseTime=this.returnmsg4.question[0].Question_PauseTime;
      this.Question_WaitTime=this.returnmsg4.question[0].Question_WaitTime;

      for(i=0;i<this.returnmsg4.question[0].Question_Title.length;i++)
      {
        // this.question_title_arr[i]={};
        this.question_title_arr[i].language_id=this.returnmsg4.question[0].Question_Title[i].que_lang_link_language_id;
        // this.question_title_arr[i].language_title=this.returnmsg10[i].Lang_Tittle;
        this.question_title_arr[i].question_title=this.returnmsg4.question[0].Question_Title[i].que_lang_link_question_title;
        console.log('indexxyy',i);
      }
    }
    if(fun_id==5)
    {
      this.returnmsg5 = return_data.json();
      console.log('returnmsg5',this.returnmsg5);
    }
    if(fun_id==6)
    {
      this.returnmsg6 = return_data.json();
      this.Option_Active = return_data.json();
      this.Option_Marks = return_data.json();
      this.Option_QuestionId = return_data.json();
      this.Option_skip = return_data.json();
    }
    if(fun_id==7)
    {
      this.returnmsg7 = return_data.json();
      console.log('returnmsg7',this.returnmsg7);
    }
    if(fun_id==8)
    {
      this.returnmsg8 = return_data.json();
      const body21={
        test_id:52
      };
      this.webservice.webRequest(this,'post',this.webservice.get_question_option,body21,'21','');
  
      const body10={
      };
      this.webservice.webRequest(this,'post',this.webservice.get_language,body10,'10','');
      console.log('returnmsg8',this.returnmsg8);
    }
    if(fun_id==9)
    {
      this.returnmsg9 = return_data.json();
      console.log('returnmsg9',this.returnmsg9);
    }
    if(fun_id==10)
    {
      this.returnmsg10=return_data.json();
      var i;
      for(i=0;i<this.returnmsg10.length;i++)
      {
        this.question_title_arr[i]={};
        this.question_title_arr[i].language_id=this.returnmsg10[i].Lang_Id;
        this.question_title_arr[i].language_title=this.returnmsg10[i].Lang_Tittle;
        this.question_title_arr[i].question_title='';
        console.log('indexx',i);
      }
      console.log('sss',this.returnmsg10[0].Lang_Id);
      console.log('sssxxx',this.question_title_arr);
    }
  }
}
