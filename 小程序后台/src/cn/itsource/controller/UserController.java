package cn.itsource.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.itsource.domain.Collect;
import cn.itsource.domain.CookSchedule;
import cn.itsource.domain.User;
import cn.itsource.service.UserService;

@Controller
public class UserController {

	@Autowired
	UserService usreService;
	
	@RequestMapping("/queryUser")
	public ModelAndView queryUser(){
		ModelAndView mv = new ModelAndView();
		User user = usreService.queryUserByUid(2);
		//System.out.println(user);
		//mv.addObject("user", user);
		mv.setViewName("forward:success.jsp");
		return mv;
	}
	
	@ResponseBody
	@RequestMapping("/selectCollection")
	public Map< String, Object> selectCollection(){
		Map<String, Object> map = new HashMap<String, Object>();
		List<Collect> list = usreService.selectCollect();
		System.out.println(list);
		map.put("collect", list);
		System.out.println(map);
		//mv.setViewName("forward:success.jsp");
		return map;		
	}
	
	@ResponseBody
	@RequestMapping("/selectCookSchedule")
	public Map< String, Object> selectCookSchedule(){
		Map<String, Object> map = new HashMap<String, Object>();
		List<CookSchedule> list = usreService.selectCookSchedule();
		System.out.println(list);
		map.put("cook_schedule", list);
		System.out.println(map);
		//mv.setViewName("forward:success.jsp");
		return map;		
	}
	
	@ResponseBody
	@RequestMapping("/deleteCollect")
	public void deleteCollect(@RequestBody Map<String,Object> map){
		//Map<String, Object> map = new HashMap<String, Object>();
		//List<CookSchedule> list = usreService.selectCookSchedule();
		//System.out.println(list);
		//map.put("cook_schedule", list);
		System.out.println(map.get("id"));
		int delete_id = (Integer)map.get("id");
		usreService.deleteCollect(delete_id);
		//mv.setViewName("forward:success.jsp");
		//return map;		
	}
	
	
	
	
}
