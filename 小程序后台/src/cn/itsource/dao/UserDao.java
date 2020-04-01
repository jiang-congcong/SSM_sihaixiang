package cn.itsource.dao;


import java.util.List;

import org.springframework.web.bind.annotation.ResponseBody;
import cn.itsource.domain.Collect;
import cn.itsource.domain.CookSchedule;
import cn.itsource.domain.User;
@ResponseBody
public interface UserDao {

	/**
	 * 查询收藏所有记录
	 * @param id
	 * @return
	 */
	public User queryUserByUid(int id);
	public List<Collect> selectCollect();
	public List<CookSchedule> selectCookSchedule();
	public void deleteCollect(int id);
	
}
