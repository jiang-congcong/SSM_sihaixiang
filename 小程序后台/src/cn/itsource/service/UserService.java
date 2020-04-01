package cn.itsource.service;

import java.text.CollationKey;
import java.util.List;

import cn.itsource.domain.Collect;
import cn.itsource.domain.CookSchedule;
import cn.itsource.domain.User;

public interface UserService {

	
	/**
	 * 
	 * @param id
	 * @return
	 */
	public User queryUserByUid(int id);
	
	public List<Collect> selectCollect();
	
	public List<CookSchedule> selectCookSchedule();
	
	public void deleteCollect(int id);
}
