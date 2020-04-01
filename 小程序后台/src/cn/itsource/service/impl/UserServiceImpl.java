package cn.itsource.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.itsource.dao.UserDao;
import cn.itsource.domain.Collect;
import cn.itsource.domain.CookSchedule;
import cn.itsource.domain.User;
import cn.itsource.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	@Override
	public User queryUserByUid(int id) {
		return userDao.queryUserByUid(id);
	}
	
	@Override
	public List<Collect> selectCollect() {
		return userDao.selectCollect();
	}
	
	@Override
	public List<CookSchedule> selectCookSchedule() {
		return userDao.selectCookSchedule();
	}
	
	@Override
	public void deleteCollect(int id) {
		userDao.deleteCollect(id);
	}

}
