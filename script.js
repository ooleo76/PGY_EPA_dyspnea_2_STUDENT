// C頁面 - 學員資訊頁面的JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 添加載入動畫
    document.body.style.opacity = '1';
    
    // 為資訊區塊添加進入動畫
    const infoSections = document.querySelectorAll('.info-section');
    infoSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });

    // 為生命徵象添加動畫效果
    const vitalItems = document.querySelectorAll('.vital-item');
    vitalItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 800 + index * 150);
    });

    // 為評估重點添加動畫效果
    const pointItems = document.querySelectorAll('.point-item');
    pointItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1200 + index * 200);
    });

    // 為生命徵象添加點擊效果
    vitalItems.forEach(item => {
        item.addEventListener('click', function() {
            // 添加脈衝動畫效果
            this.style.transform = 'scale(1.05)';
            this.style.background = 'linear-gradient(135deg, #ebf3fd, #d6eaff)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'white';
            }, 300);
            
            // 高亮顯示異常值
            const vitalValue = this.querySelector('.vital-value');
            const originalColor = vitalValue.style.color;
            vitalValue.style.color = '#3498db';
            vitalValue.style.fontSize = '1.4rem';
            
            setTimeout(() => {
                vitalValue.style.color = originalColor || '#e74c3c';
                vitalValue.style.fontSize = '1.3rem';
            }, 1000);
        });
    });

    // 為評估重點添加點擊效果
    pointItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除其他項目的高亮
            pointItems.forEach(p => p.classList.remove('highlighted'));
            
            // 高亮當前項目
            this.classList.add('highlighted');
            
            setTimeout(() => {
                this.classList.remove('highlighted');
            }, 3000);
        });
    });

    // 添加鍵盤快捷鍵支持
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case '1':
                // 快捷鍵1 - 聚焦到臨床情境
                infoSections[0].scrollIntoView({behavior: 'smooth'});
                break;
            case '2':
                // 快捷鍵2 - 聚焦到病人資料
                infoSections[1].scrollIntoView({behavior: 'smooth'});
                break;
            case '3':
                // 快捷鍵3 - 聚焦到檢傷資料
                infoSections[2].scrollIntoView({behavior: 'smooth'});
                break;
            case '4':
                // 快捷鍵4 - 聚焦到評估重點
                infoSections[3].scrollIntoView({behavior: 'smooth'});
                break;
            case 'Home':
                // Home鍵 - 滾動到頂部
                window.scrollTo({top: 0, behavior: 'smooth'});
                break;
            case 'End':
                // End鍵 - 滾動到底部
                window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
                break;
        }
    });

    // 響應式處理
    function handleResize() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.margin = '10px';
            container.style.borderRadius = '10px';
        } else {
            container.style.margin = '0 auto';
            container.style.borderRadius = '15px';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始執行

    // 添加滾動進度指示器
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        // 更新進度條（如果需要的話）
        console.log('滾動進度:', scrollProgress + '%');
    }

    window.addEventListener('scroll', updateScrollProgress);

    console.log('急性呼吸困難評估 - 學員資訊頁面已載入');
});

// 添加高亮樣式
const style = document.createElement('style');
style.textContent = `
    .point-item.highlighted {
        background-color: rgba(52, 152, 219, 0.1);
        border-radius: 8px;
        padding: 10px;
        margin: 5px -10px;
        transform: scale(1.02);
        transition: all 0.3s ease;
    }
    
    .point-item.highlighted .point-number {
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);